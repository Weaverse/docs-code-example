type HydrogenComponentPresets = {
  type: string;
  children?: HydrogenComponentPresets[];
  [key: string]: any;
}
