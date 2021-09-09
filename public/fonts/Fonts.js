import {Global} from "@emotion/react";

const Fonts = () => {
    <Global
        styles={`
            /*Bold*/
            @font-face {
                font-family:'Gotham Bold';
                src: url('./Gotham-Bold.otf')format('otf')
            }
        `}
    />
}