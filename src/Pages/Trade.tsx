import {Chart} from '../Components/Chart'


export const Trade = () => {

    return(
        <div className="container">
            <h1>Trade</h1>
            <p>Order book exchange for trading oPUNK/ETH. Coming Soon</p>
            <div className='frame' hidden>
                <div className='row'>
                    <div className='col-8'>
                        <Chart />

                    </div>
                    <div className='col-4'>
                        <p>Test</p>
                    </div>
                </div>
            </div>


        </div>
    );
}