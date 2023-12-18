export default interface DeviceInfo {
    type: "input" | "output";
    manufacturer: string;
    name: string;
    version: string;
    enabled: boolean;
    volume: number;
}