import QRCode from "react-qr-code";

// const QRURL = "https://codyde.github.io/ld-demo-app/";
// const QRURL = "https://codydemoapp.netlify.app"

const qrCodeHome = (flags) => {  
  console.log(flags.codeurl)
  return (
    <div className="mx-auto shadow-2xl">
      <div className="qr-wrapper">
        <QRCode size="200" value={flags.codeurl} />
      </div>
    </div>
  )     
};

export default qrCodeHome;