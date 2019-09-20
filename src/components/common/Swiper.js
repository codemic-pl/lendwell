import React, { Component } from 'react';
import { ScrollView, View, Platform } from 'react-native';
import componentStyles from '../../assets/styles/common/Swiper';
import { AppIcon, Button } from './';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../assets/styles/common/Variables';

const width = WINDOW_WIDTH;
const height = WINDOW_HEIGHT;

class Swiper extends Component {
  // Props for ScrollView component
  static defaultProps = {
    // Container swiper style
    containerStyle: null,
    // Arrange screens horizontally
    horizontal: true,
    // Scroll exactly to the next screen, instead of continous scrolling
    pagingEnabled: true,
    // Hide all scroll indicators
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    // Do not bounce when the end is reached
    bounces: false,
    // Do not scroll to top when the status bar is tapped
    scrollsToTop: false,
    // Remove offscreen child views
    removeClippedSubviews: true,
    // Do not adjust content behind nav-, tab- or toolbars automatically
    automaticallyAdjustContentInsets: false,
    // Fisrt is screen is active
    index: 0,
    // On last slide button click
    onLastSlide() {
      console.log('The end of swiper');
    },
    // On update index
    onUpdateIndex(index) {
      console.log(`Index Updated ${index}`);
    }
  };

  state = this.initState(this.props);

  /**
   * Scroll begin handler
   * @param {object} e native event
   */
  onScrollBegin = () => {
    // Update internal isScrolling state
    this.internals.isScrolling = true;
  }

  /**
   * Scroll end handler
   * @param {object} e native event
   */
  onScrollEnd = e => {
    // Update internal isScrolling state
    this.internals.isScrolling = false;

    // Update index
    this.updateIndex(e.nativeEvent.contentOffset
      ? e.nativeEvent.contentOffset.x
      // When scrolled with .scrollTo() on Android there is no contentOffset
      : e.nativeEvent.position * this.state.width
    );
  }

  /*
   * Drag end handler
   * @param {object} e native event
   */
  onScrollEndDrag = e => {
    const { contentOffset: { x: newOffset } } = e.nativeEvent;
    const { children } = this.props;
    const { index } = this.state;
    const { offset } = this.internals;

    // Update internal isScrolling state
    // if swiped right on the last slide
    // or left on the first one

    if (offset === newOffset &&
      (index === 0 || index === children.length - 1)) {
      this.internals.isScrolling = false;
    }
  }

  /**
   * Get index from state
   */
  getIndex = () => {
    const state = this.state;
    return state.index || 0;
  }

  /**
   * Initialize the state
   */
  initState(props) {
    // Get the total number of slides passed as children
    const total = props.children ? props.children.length || 1 : 0;
      // Current index
    const index = total > 1 ? Math.min(props.index, total - 1) : 0;
      // Current offset
    const offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height,
      containerStyle: props.containerStyle,
      onLastSlide: props.onLastSlide,
      onUpdateIndex: props.onUpdateIndex
    };

    // Component internals as a class property,
    // and not state to avoid component re-renders when updated
    this.internals = {
      isScrolling: false,
      offset
    };

    return state;
  }

  /**
   * Update index after scroll
   * @param {object} offset content offset
   */
  updateIndex = (offset) => {
    const state = this.state;
    const diff = offset - this.internals.offset;
    const step = state.width;
    let index = state.index;

    // Do nothing if offset didn't change
    if (!diff) {
      return;
    }

    // Make sure index is always an integer
    index = parseInt(index + Math.round(diff / step), 10);

    // Update internal offset
    this.internals.offset = offset;
    // Update index in the state
    this.setState({
      index
    });

    state.onUpdateIndex(index);
  }

  /**
   * Swipe one slide forward/backward
   */
  swipe = (back) => {
    // Ignore if already scrolling or if there is less than 2 slides
    const lastScreen = this.state.index === this.state.total - 1;
    const firstScreen = this.state.index === 0;
    if (this.internals.isScrolling ||
        this.state.total < 2 ||
        (!back && lastScreen) ||
        (back && firstScreen)) {
      return;
    }


    const state = this.state;
    let diff = this.state.index;
    if (back) {
      diff--;
    } else {
      diff++;
    }
    const x = diff * state.width;
    const y = 0;

    // Call scrollTo on scrollView component to perform the swipe
    if (this.scrollView) {
      this.scrollView.scrollTo({ x, y, animated: true });
    }
    // this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });

    // Update internal scroll state
    this.internals.isScrolling = true;

    // Trigger onScrollEnd manually on android
    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        });
      });
    }
  }

  /**
   * Render ScrollView component
   * @param {array} slides to swipe through
   */
  renderScrollView = pages => {
    return (
      <ScrollView
        ref={component => { this.scrollView = component; }}
        {...this.props}
        contentContainerStyle={[componentStyles.wrapper, this.props.style]}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}
      >
        {pages.map((page, i) =>
          // Render each slide inside a View
          <View style={[componentStyles.fullScreen, componentStyles.slide]} key={i}>
            {page}
          </View>
        )}
      </ScrollView>
    );
  }

  /**
   * Render pagination indicators
   */
  renderPagination = () => {
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[componentStyles.dot, componentStyles.activeDot]} />;
    const Dot = <View style={componentStyles.dot} />;

    const dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(key === this.state.index
        // Active dot
        ? React.cloneElement(ActiveDot, { key })
        // Other dots
        : React.cloneElement(Dot, { key })
      );
    }

    return (
      <View
        pointerEvents="none"
        style={[componentStyles.pagination]}
      >
        {dots}
      </View>
    );
  }

  /**
   * Render Continue or Done button
   */
  renderButton = () => {
    const lastScreen = this.state.index === this.state.total - 1;
    if (lastScreen) {
      return (
        <View pointerEvents="box-none" style={[componentStyles.buttonWrapper]}>
          <Button
            text="Rozpocznij"
            onPress={() => this.state.onLastSlide()}
            buttonStyle={componentStyles.buttonFinish}
            textStyle={componentStyles.buttonFinishText}
          />
        </View>
      );
    }
    return (
      <View pointerEvents="box-none" style={[componentStyles.buttonWrapper]}>
        <Button onPress={() => this.swipe()} buttonStyle={componentStyles.buttonContinue}>
          <AppIcon name="ArrowRight" width="20" height="20" fill="#FFFFFF" />
        </Button>
      </View>
    );
  }

  renderFooter = () => {
    if (!this.props.disableDefaultUI) {
      return (
        <View style={[componentStyles.footer]}>
          {/* Render pagination */}
          {this.renderPagination()}
          {/* Render Continue or Done button */}
          {this.renderButton()}
        </View>
      );
    }
  }

  /**
   * Render the component
   */
  render = ({ children, containerStyle } = this.props) => {
    return (
      <View
        style={[
          componentStyles.container,
          componentStyles.fullScreen,
          (containerStyle || {})
        ]}
      >
        {/* Render screens */}
        {this.renderScrollView(children)}
        {this.renderFooter()}
      </View>
    );
  }
}

export { Swiper };
