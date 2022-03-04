import { VideoIframeStyled } from "./styled";

interface VideoIframeTypes {
  videoURL: string;
}

const VideoIframe = ({ videoURL }: VideoIframeTypes) => {
  return (
    <VideoIframeStyled>
      <iframe
        width={"100%"}
        height={300}
        src={`https://www.youtube.com/embed/${videoURL}`}
        frameBorder="0"
        allowFullScreen
      />
    </VideoIframeStyled>
  );
};

export default VideoIframe;
