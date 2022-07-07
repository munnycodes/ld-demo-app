import QRCode from "react-qr-code";

// const QRURL = "https://codyde.github.io/ld-demo-app/";
// const QRURL = "https://codydemoapp.netlify.app"

const qrCodeHome = (flags) => {  
  console.log(flags)
  return (
    <div className="mx-auto shadow-2xl">
      <div className="qr-wrapper">
        <QRCode size="200" value={flags.qrcode} />
      </div>
    </div>
  )     
};

export default qrCodeHome;