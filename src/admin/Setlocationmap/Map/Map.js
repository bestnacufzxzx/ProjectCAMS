import React, {Component} from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazRuMXAyNTEwYWExM25wNXg3NG1iajJ5In0.26ioQ766mtHNn3lzhFB3vw'
});

const zoom = [17];
const center = [99.897343, 8.644305];


export default class MapBox extends Component {

    getLatLng = ({features}) => {
        let gps = []
        gps = features[0].geometry.coordinates
        this.props.changeGps(gps);
    }
    
    onDrawCreate =({features}) => this.getLatLng({features}) ;
    onDrawUpdate =({features}) => this.getLatLng({features}) ;

    render() {
        return (
            <div>

                <Map
                    style = {"mapbox://styles/mapbox/streets-v11"}
                    zoom = {zoom}
                    center = {center}
                    containerStyle = {{
                    height : "80vh",
                    width : "78.5vw"
                }}>
                    <DrawControl onDrawCreate ={this.onDrawCreate} onDrawUpdate = {this.onDrawUpdate}/>
                 
                </Map>

            </div>

        );
    }
}

