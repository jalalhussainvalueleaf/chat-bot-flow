import { nanoid } from "nanoid";

import type { TextMessageNodeData } from "~/modules/nodes/nodes/text-message-node/text-message.node";

import { BuilderNode } from "~/modules/nodes/types";
import { createNodeWithData, createNodeWithDefaultData } from "~/modules/nodes/utils";

const startNode = createNodeWithDefaultData(BuilderNode.START, { position: { x: 0, y: 267 } });
const textMessageNode = createNodeWithData<TextMessageNodeData>(BuilderNode.TEXT_MESSAGE, {
    channel: "whatsapp",
    message: "this option message is for whatsapp channel",
    deletable: true,
}, { position: { x: 300, y: -140 } });
const mobileResponsiveInformationTextMessageNode = createNodeWithData<TextMessageNodeData>(BuilderNode.TEXT_MESSAGE, {
    channel: "telegram",
    message: "this option message is for telegram channel",
    deletable: true,
}, { position: { x: 300, y: 180 } });
const edgeDropInformationTextMessageNode = createNodeWithData<TextMessageNodeData>(BuilderNode.TEXT_MESSAGE, {
    channel: "messenger",
    message: "Now you can add new nodes by dropping edge on the canvas! Try it out! Drag the edge from this node to any empty space on the canvas. 🎉",
    deletable: true,
}, { position: { x: 300, y: 460 } });
const endNode = createNodeWithDefaultData(BuilderNode.END, { position: { x: 800, y: 267 } });

const nodes = [startNode, textMessageNode, mobileResponsiveInformationTextMessageNode, edgeDropInformationTextMessageNode, endNode];

const edges = [
    { id: nanoid(), source: startNode.id, target: textMessageNode.id, type: "deletable" },
    { id: nanoid(), source: startNode.id, target: mobileResponsiveInformationTextMessageNode.id, type: "deletable" },
    { id: nanoid(), source: startNode.id, target: edgeDropInformationTextMessageNode.id, type: "deletable" },
    { id: nanoid(), source: mobileResponsiveInformationTextMessageNode.id, target: endNode.id, type: "deletable" },
    { id: nanoid(), source: textMessageNode.id, target: endNode.id, type: "deletable" },
];

export {
    nodes as defaultNodes,
    edges as defaultEdges,
};
