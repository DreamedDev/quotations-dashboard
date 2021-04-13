import i1 from "../img/products/1.jpg";
import i2 from "../img/products/2.jpg";
import i3 from "../img/products/3.jpg";
import i4 from "../img/products/4.jpg";
import i5 from "../img/products/5.jpg";
import i6 from "../img/products/6.jpg";
import i7 from "../img/products/7.jpg";
import i8 from "../img/products/8.jpg";
import i9 from "../img/products/9.jpg";

import u1 from "../img/users/1.jpg"
import u2 from "../img/users/2.jpg"
import u3 from "../img/users/3.jpg"
import u4 from "../img/users/4.jpg"
import u5 from "../img/users/5.jpg"
import u6 from "../img/users/6.jpg"
import u7 from "../img/users/7.jpg"
import u8 from "../img/users/8.jpg"
import u9 from "../img/users/9.jpg"


import Image from "../components/listComponents/listElements/Image/Image";
import DoubleRowText from "../components/listComponents/listElements/DoubleRowText/DoubleRowText";
import Participant from "../components/Participant/Participant";
import SelectList from "../components/SelectList/SelectList";
import Button from "../components/Button/Button";

const exampleParticipants = [
    {image: u1, name: "Annie's Craft", messageCount: 0},
    {image: u2, name: "Bob Smith", messageCount: 3},
    {image: u3, name: "Janette Jane", messageCount: 0},
    {image: u4, name: "Json Sharp", messageCount: 0},
    {image: u5, name: "Jasmin Star", messageCount: 7},
    {image: u6, name: "JJ.Late", messageCount: 0},
    {image: u7, name: "Marco Polo", messageCount: 0},
    {image: u8, name: "K.Kołomorov", messageCount: 2},
    {image: u9, name: "John Small", messageCount: 0},
]

const exampleTexts = [{
    inquiries: "Henry's One Bedroom Apartment",
    nr: "RFQ/IV/01-00948",
    value: "38,564",
    date: "11 Apr 21",
    time: "18:25",
    items: "7 items"
},{
    inquiries: "Manna's Townhouse",
    nr: "RFS/II/02-00948",
    value: "98,445",
    date: "15 May 21",
    time: "08:15",
    items: "3 items"
},{
    inquiries: "Culture Pop-style House",
    nr: "HFQ/IVOJ/01-1455",
    value: "318,564",
    date: "3 June 21",
    time: "12:01",
    items: "7 items"
},{
    inquiries: "Price Johnson's Villa The Maja",
    nr: "RFQ/IVSS/01-01248",
    value: "558,564",
    date: "20 July 21",
    time: "10:03",
    items: "17 items"
},{
    inquiries: "Mexico Hostel",
    nr: "SFQ/VI/11-00948",
    value: "45,554",
    date: "3 Oct 21",
    time: "17:15",
    items: "2 items"
},{
    inquiries: "White House - United States",
    nr: "FFQ/IX/01-12948",
    value: "132,564",
    date: "12 Oct 21",
    time: "12:00",
    items: "3 items"
},
]

const exampleItems = [{
    text: "Ongoing",
    color: "#302a6c",
    backgroundColor: "#eae9f0"
},{
    text: "Pending",
    color: "#d4a927",
    backgroundColor: "#fefbed"
}]



const exampleListRows = [[
    <Image source={i1}/>,
    <DoubleRowText firstLine={exampleTexts[0].inquiries} secondLine={exampleTexts[0].nr}/>,
    <DoubleRowText firstLine={exampleTexts[0].value} secondLine={exampleTexts[0].items}/>,
    <DoubleRowText firstLine={exampleTexts[0].date} secondLine={exampleTexts[0].time} type="slim"/>,
    <Participant participant={exampleParticipants[0]}/>,
    <SelectList items={exampleItems} selected={0}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i2}/>,
    <DoubleRowText firstLine={exampleTexts[1].inquiries} secondLine={exampleTexts[1].nr}/>,
    <DoubleRowText firstLine={exampleTexts[1].value} secondLine={exampleTexts[1].items}/>,
    <DoubleRowText firstLine={exampleTexts[1].date} secondLine={exampleTexts[1].time} type="slim"/>,
    <Participant participant={exampleParticipants[1]}/>,
    <SelectList items={exampleItems} selected={0}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i3}/>,
    <DoubleRowText firstLine={exampleTexts[2].inquiries} secondLine={exampleTexts[2].nr}/>,
    <DoubleRowText firstLine={exampleTexts[2].value} secondLine={exampleTexts[2].items}/>,
    <DoubleRowText firstLine={exampleTexts[2].date} secondLine={exampleTexts[2].time} type="slim"/>,
    <Participant participant={exampleParticipants[2]}/>,
    <SelectList items={exampleItems} selected={0}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i4}/>,
    <DoubleRowText firstLine={exampleTexts[3].inquiries} secondLine={exampleTexts[3].nr}/>,
    <DoubleRowText firstLine={exampleTexts[3].value} secondLine={exampleTexts[3].items}/>,
    <DoubleRowText firstLine={exampleTexts[3].date} secondLine={exampleTexts[3].time} type="slim"/>,
    <Participant participant={exampleParticipants[3]}/>,
    <SelectList items={exampleItems} selected={1}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i5}/>,
    <DoubleRowText firstLine={exampleTexts[3].inquiries} secondLine={exampleTexts[3].nr}/>,
    <DoubleRowText firstLine={exampleTexts[3].value} secondLine={exampleTexts[3].items}/>,
    <DoubleRowText firstLine={exampleTexts[3].date} secondLine={exampleTexts[3].time} type="slim"/>,
    <Participant participant={exampleParticipants[4]}/>,
    <SelectList items={exampleItems} selected={0}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i6}/>,
    <DoubleRowText firstLine={exampleTexts[4].inquiries} secondLine={exampleTexts[4].nr}/>,
    <DoubleRowText firstLine={exampleTexts[4].value} secondLine={exampleTexts[4].items}/>,
    <DoubleRowText firstLine={exampleTexts[4].date} secondLine={exampleTexts[4].time} type="slim"/>,
    <Participant participant={exampleParticipants[5]}/>,
    <SelectList items={exampleItems} selected={1}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i7}/>,
    <DoubleRowText firstLine={exampleTexts[5].inquiries} secondLine={exampleTexts[5].nr}/>,
    <DoubleRowText firstLine={exampleTexts[5].value} secondLine={exampleTexts[5].items}/>,
    <DoubleRowText firstLine={exampleTexts[5].date} secondLine={exampleTexts[5].time} type="slim"/>,
    <Participant participant={exampleParticipants[6]}/>,
    <SelectList items={exampleItems} selected={1}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i8}/>,
    <DoubleRowText firstLine={exampleTexts[5].inquiries} secondLine={exampleTexts[5].nr}/>,
    <DoubleRowText firstLine={exampleTexts[5].value} secondLine={exampleTexts[5].items}/>,
    <DoubleRowText firstLine={exampleTexts[5].date} secondLine={exampleTexts[5].time} type="slim"/>,
    <Participant participant={exampleParticipants[7]}/>,
    <SelectList items={exampleItems} selected={0}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
],[
    <Image source={i9}/>,
    <DoubleRowText firstLine={exampleTexts[1].inquiries} secondLine={exampleTexts[1].nr}/>,
    <DoubleRowText firstLine={exampleTexts[1].value} secondLine={exampleTexts[1].items}/>,
    <DoubleRowText firstLine={exampleTexts[1].date} secondLine={exampleTexts[1].time} type="slim"/>,
    <Participant participant={exampleParticipants[8]}/>,
    <SelectList items={exampleItems} selected={0}/>,
    <div><Button text="" type="FilterWhite" icon="more_horiz"/></div>
]]

export default exampleListRows