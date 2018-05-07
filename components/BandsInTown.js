import React, { Component } from 'react';

class BandsInTown extends Component {
  componentDidMount () {
      const script = document.createElement("script");

      script.src = "https://widget.bandsintown.com/main.min.js";
      script.async = true;

      document.body.appendChild(script)
  }

  render() {
    return (
      <a className="bit-widget-initializer" data-artist-name="Shy Boys" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#000000" data-link-color="#b03177" data-popup-background-color="rgba(0,0,0,0)" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-link-text-color="#FFFFFF"></a>
    );
  }
}

export default BandsInTown
