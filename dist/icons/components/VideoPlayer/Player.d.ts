import PropTypes from 'prop-types';
import 'video-react/dist/video-react.css';
export declare const VideoPlayer: {
    (props: any): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        url: PropTypes.Requireable<string>;
        thumbnail: PropTypes.Requireable<string>;
        subtitle: PropTypes.Requireable<string>;
        downloadLink: PropTypes.Requireable<string>;
    };
};
