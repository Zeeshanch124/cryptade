import React, { useEffect, useState } from 'react';
import { TopSection } from '../components/Landing/TopSection';
import Footer from '../components/Layout/Footer';
import GetStartedSection from '../components/Landing/GetStartedSection';
import LandingTable from '../components/Landing/Table';
import { socket } from '../helpers/Socket';


const Landing = () => {
    const [data, setData] = useState();

    useEffect(() => {
        function onConnect(socket) {
            var id = socket.io.engine.id;
            console.log("User Connected : ", id)



        }

        function onDisconnect() {
            console.log("User disConnected")

            //   setIsConnected(false);
        }

        function onFooEvent(value) {
            //   setFooEvents(previous => [...previous, value]);
        }

        socket.on('connect', () => onConnect(socket));
        socket.emit("initial_data");
        socket.on("get_data", (data) => setData(data));
        socket.on('disconnect', onDisconnect);
        socket.on('updated', (data) => { setData(data); console.log('got updated value: ', data) });




        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            //   socket.off('foo', onFooEvent);
        };
    }, []);


    return (
        <>
            <TopSection />

            <LandingTable data={data} />

            <GetStartedSection />

            {/* <Footer /> */}
        </>
    )
}

export default Landing;