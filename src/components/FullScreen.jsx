const goFullScreen = () => {
    const elem = document.documentElement;
  
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
  };
  
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };


  export default function FullScreen(){
    return (
        <>
            <button onClick={goFullScreen} className="rounded-md px-2 py-0.5 float-right bg-gray-300 text-black" >EnterFS</button>
            <button onClick={exitFullScreen} className="rounded-md px-2 py-0.5 float-left bg-gray-300 text-black" >ExitFS</button>
        </>
    )
  }