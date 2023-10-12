interface HydrogenComponentSchema {
  title: string;
  type: string;
  inspector: InspectorGroup[];
  childTypes?: string[];
  presets?: Omit<HydrogenComponentPresets, 'type'>;
  limit?: number;
  enabledOn?: {
    pages?: ('*' | PageType)[];
    groups?: ('*' | 'header' | 'footer' | 'body')[];
  };
  toolbar?: (HydrogenToolbarAction | HydrogenToolbarAction[])[];
}
