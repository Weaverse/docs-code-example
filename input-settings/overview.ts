type Input = {
  type: InputType
  name: string
  defaultValue: string | number | boolean | Partial<WeaverseImage>
  label?: string
  placeholder?: string
  configs?: AdditionalInputConfigs
  condition?: string
  helpText?: string
}
