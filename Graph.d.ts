interface Theme {
    Name?: string;
    Background?: Color3;
    LightBackground?: Color3;
    Text?: Color3;
}

type Graph = {
    Resolution: number;
    Data: { [key: string]: number[] };
    BaselineZero: boolean;

    Theme(newTheme: Theme): void;
    Render(): void;
};

interface GraphConstructor {
    readonly ClassName: 'Graph';
    new (frame: Frame): Graph;
}

declare const Graph: GraphConstructor;

export = Graph;
