import { Component } from "react";
import Flicking from "@egjs/react-flicking";

export default class DemoComponent extends Component {
  public render() {
    return <Flicking moveType="freeScroll" bound={true}>
      <span className="button mr-2 is-white">🍎 Apple</span>
      <span className="button mr-2 is-white">🍉 Watermelon</span>
      <span className="button mr-2 is-white">🥝 Kiwi</span>
      <span className="button mr-2 is-white">...</span>
    </Flicking>;
  }
}