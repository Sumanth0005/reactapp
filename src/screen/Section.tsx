import Maincontainer from "./Maincontainer";
import Footer from "./Footer";

export default function Section() {
    return (
        <>
            <div className="tl-d-flex">
                <Maincontainer />
                <Footer/>
            </div>
        </>
    );
}
