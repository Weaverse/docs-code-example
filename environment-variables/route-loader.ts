export async function loader({context}: LoaderArgs) {
  // Get `env` variables from App Load Context
  let {env} = context

  return json({
    // ... route data
  });
}
