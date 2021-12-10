import Service from './Service/Service';
import Hear from './Hear/Hear'
import Journey from './Journey/Journey';
import Devices from './Devices/Devices'
import Inspirer30Shine from './Inspirer30Shine/Inspirer30Shine'
import Explore from './Explore/Explore'
import TrustAndSafe from './TrustAndSafe/TrustAndSafe'
import Sale from './Sale/Sale'
import Shop from './Shop/Shop';
function Home() {

    return (
        <div>
            <Service/>
            <Hear/>
            <Journey/>
            <Devices/>
            <Inspirer30Shine/>
            <Explore/>
            <TrustAndSafe/>
            <Sale/>
            <Shop/>
        </div>
    )
}

export default Home