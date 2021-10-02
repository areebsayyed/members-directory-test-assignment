import * as React from 'react';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Data from './data.json';
import JsonDataMap from './JsonDataMap';
import { List, AutoSizer, WindowScroller } from 'react-virtualized';
import { IndeterminateCheckBox, Opacity, Preview } from '@mui/icons-material';


localStorage.setItem('Data', JSON.stringify(Data));

const Mydata = JSON.parse(localStorage.getItem("Data"));


export default function ListItemCard() {
    const [currrentAlpha, setcurrrentAlpha] = React.useState("0");
    const [alphaindex, setalphaindex] = React.useState([]);
    const [sidenav, setsidenav] = React.useState([]);
    const [indexbutton, setindexbutton] = React.useState(0);
    const Alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    Data.sort((a, b) => {
        let fa = a.first_name.toLowerCase(),
            fb = b.first_name.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })

    React.useEffect(() => {
        Alphabets.map((char) => {
            const myObj = Data.find(obj => obj.first_name.toLowerCase().substr(0, 1) === char);
            const aindex = Data.indexOf(myObj);
            const mainData = { value: char, index: aindex }


            setalphaindex(oldarray => [...oldarray, mainData])

        })

    }, [])

    React.useEffect(() => {
        Alphabets.map((char) => {
            const sidechar = Data.find(obj => obj.first_name.toLowerCase().substr(0, 1) === char);
            const sideindex = Data.indexOf(sidechar);
            const sideCharData = { value: char, index: sideindex }
            if (!(sideindex == -1)) {
                setsidenav(oldarray => [...oldarray, sideCharData])
            }
        })
    }, [])
    console.log(sidenav, "sidenav")


    const rowRenderer = ({ index, isScrolling, key, style, isVisible }) => {
        return (<div key={key} style={style}>
            {alphaindex.map(obj =>
                obj.index == index ?
                    <section style={{ backgroundColor: '#eeeef0' }} id={`sec-${obj.value}`}>
                        <Typography style={{ marginLeft: '2rem' }} variant="button">{obj.value}</Typography></section> : null
            )}
            <JsonDataMap item={Data[index]} />
        </div>)
    };

    const sectionhight = (index) => {

        for (let i = 0; i < alphaindex.length; i++) {

            if (alphaindex[i].index == index.index) {
                return 130;

            }

        }
        return 100

    }
    console.log(indexbutton, "indexbutton")
    console.log(alphaindex, "alphaindex")

    return (
        <>
            <div style={{ zIndex: '1', backgroundColor: '#f6f6f6', position: 'fixed', marginRight: '0.5rem', borderRadius: '25px', right: '0', textAlign: 'center', width: '20px', display: 'block', color: 'inherit', height: 'auto' }}>
                {sidenav.map((item) => {
                    return (<div onClick={() => {
                        setindexbutton(item.index);
                        window.location.href = `#sec-${item.value}`

                        // console.log(window.location.pathname, "url", item.value)
                    }} style={{ fontSize: "100%" }}><Typography variant="caption">{item.value.toUpperCase()}</Typography></div>)
                })}
            </div>
            <WindowScroller>

                {({ height, isScrolling, registerChild, scrollTop }) => (
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <div ref={registerChild}>
                                <List
                                    width={width}
                                    height={height}
                                    rowCount={Data.length}
                                    rowHeight={(index) => {

                                        return sectionhight(index)

                                    }}
                                    rowRenderer={rowRenderer}
                                    style={{ listStyleType: "none" }}
                                    scrollToIndex={indexbutton}
                                />
                            </div>
                        )}
                    </AutoSizer>
                )}
            </WindowScroller>


        </>

    );
}
