declare module "traditional-or-simplified" {
  export function detect(input: string): {
    inputLength: number;
    simplifiedCharacters: number;
    traditionalCharacters: number;
    detectedCharacters: "traditional" | "simplified" | "unknown";
    detectionRate: number;
  };
  export function isTraditional(input: string): boolean;
  export function isSimplified(input: string): boolean;
}
