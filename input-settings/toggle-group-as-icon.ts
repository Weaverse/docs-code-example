{
  type: "toggle-group",
  name: "loading",
  label: "Background image loading",
  configs: {
    options: [
      {label: "Eager", value: "eager", icon: "Lightning"},
      {label: "Lazy", value: "lazy", icon: "SpinnerGap"},
    ],
  },
  defaultValue: "eager",
  helpText: 'Learn more about <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading" target="_blank" rel="noopener noreferrer">image loading strategies</a>.',
}
