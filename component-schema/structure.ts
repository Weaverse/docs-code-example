interface HydrogenComponentSchema {
  title: string;
  type: string;
  childTypes?: string[];
  inspector: InspectorGroup[];
  presets?: Omit<HydrogenComponentPresets, 'type'>;
  limit?: number;
  enabledOn?: {
    pages?: ('*' | PageType)[];
    groups?: ('*' | 'header' | 'footer' | 'body')[];
  };
  toolbar?: (HydrogenToolbarAction | HydrogenToolbarAction[])[];
}
