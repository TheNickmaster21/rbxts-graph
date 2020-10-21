# rbxts-graph

boatbomber's Graph class with types!

```TS
import Graph from '@rbxts/graph';

const playerGui = game.GetService('Players').LocalPlayer.FindFirstChild('PlayerGui') as PlayerGui;
const screenGui = new Instance('ScreenGui');
const frame = new Instance('Frame');
frame.Size = UDim2.fromScale(0.5, 0.5);
frame.Position = UDim2.fromScale(0.25, 0.25);
frame.Parent = screenGui;

const graph = new Graph(frame);
graph.Data = {
    test: [1, 2, 3, 4, 5]
};
graph.Resolution = 2;

screenGui.Parent = playerGui;
```
