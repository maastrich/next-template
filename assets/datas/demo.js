import { func } from "prop-types";

let datas = {
    "links": [
        { source: "Charles Dupont", target: "Martin Dubois" },
        { target: "Charles Dupont", source: "Martin Dubois" }
    ],
    "nodes": [
        { color: "yellow", type: "Computer", id: "Charles Dupont", name: "Charles Dupont", parent: null },
        { color: "yellow", type: "Computer", id: "Martin Dubois", name: "Martin Dubois", parent: null },
        { color: "blue", type: "IP", id: "192.168.43.1", name: "IP: 192.168.43.1", parent: "Martin Dubois" },
        { color: "blue", type: "IP", id: "192.168.43.193", name: "IP: 192.168.43.193", parent: "Charles Dupont" },
        { color: "green", type: "Connection Protocol", id: "TCP 192.168.43.1", name: "TCP Connection", parent: "192.168.43.1" },
        { color: "green", type: "Connection Protocol", id: "TCP 192.168.43.193", name: "TCP Connection", parent: "192.168.43.193" },
        { color: "green", type: "Connection Protocol", id: "UDP 192.168.43.193", name: "UDP Connection", parent: "192.168.43.193" },
        { color: "red", type: "Virtual Port", id: "53 192.168.43.1", name: "Connection Port 53", parent: "TCP 192.168.43.1" },
        { color: "red", type: "Virtual Port", id: "80 192.168.43.1", name: "Connection Port 80", parent: "UDP 192.168.43.193" },
        { color: "red", type: "Virtual Port", id: "TCP 192.168.43.193 111", name: "Connection Port 111", parent: "TCP 192.168.43.193" },
        { color: "red", type: "Virtual Port", id: "TCP 192.168.43.193 3000", name: "Connection Port 3000", parent: "TCP 192.168.43.193" },
        { color: "red", type: "Virtual Port", id: "TCP 192.168.43.193 5001", name: "Connection Port 5001", parent: "TCP 192.168.43.193" },
        { color: "purple", type: "Physical Port", id: "Charles Dupont USB 3.0", name: "USB 3.0", parent: "Charles Dupont" },
        { color: "purple", type: "Physical Port", id: "Charles Dupont USB 2.0", name: "USB 2.0", parent: "Charles Dupont" },
        { color: "purple", type: "Physical Port", id: "Charles Dupont Ethernet Port", name: "Ethernet Port", parent: "Charles Dupont" },
        { color: "purple", type: "Physical Port", id: "Martin Dubois Ethernet Port", name: "Ethernet Port", parent: "Martin Dubois" },
    ]
}

function addParentToData(parent, nodeFrom, data) {
    if (nodeFrom === -1)
        return data;
    for (let i = 0; i < datas.nodes.length; i++) {
        if (parent === datas.nodes[i].id) {
            data.nodes.push(datas.nodes[i]);
            if (nodeFrom)
                data.links.push({ source: datas.nodes[i].parent, target: datas.nodes[i].id });
            data = addParentToData(datas.nodes[i].parent, nodeFrom - 1, data);
        }
    }
    return data;
}

function getNodeFromSelected(selection, nodeFrom, data, first) {
    if (nodeFrom === -1)
        return data;
    for (let i = 0; i < datas.nodes.length; i++) {
        if (selection === datas.nodes[i].id) {
            if (datas.nodes[i].parent)
                data.links.push({ source: datas.nodes[i].parent, target: datas.nodes[i].id });
            data.nodes.push(datas.nodes[i]);
//            console.log(datas.nodes[i])
            for (let n = 0; n < datas.nodes.length; n++) {
                if (selection === datas.nodes[n].parent)
                    data = getNodeFromSelected(datas.nodes[n].id, nodeFrom - 1, data, false)
            }
            if (first)
                data = addParentToData(datas.nodes[i].parent, nodeFrom -1, data);
        }
    }
    return data;
}

export default function getData(selection, nodeFrom) {
    let data = datas;
    console.log(selection, nodeFrom);
    if (nodeFrom < 1)
        nodeFrom = 10000;
    if (selection === null) {
        for (let i = 0; i < data.nodes.length; i++) {
            if (data.nodes[i].parent) {
                data.links.push({ source: data.nodes[i].parent, target: data.nodes[i].id });
            }
        }
    }
    else {
        let elseData = { links: [], nodes: [] };

        elseData = getNodeFromSelected(selection, nodeFrom, elseData, true)
        console.log(elseData)
        return elseData;
    }
    return data;
}