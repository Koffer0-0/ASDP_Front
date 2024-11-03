
export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore();
    const userPositionId = userStore.user?.positionId;

    // Map positionId values to role names
    const roleMapping = {
        1: 'user',
        2: 'teamlead',
        3: 'director'
    };
    console.log(roleMapping)
    // Get the role name from the positionId
    const userRole = roleMapping[userPositionId];

    // Check the required role for the route
    const requiredRole = to.meta.requiredRole;

    // If the route has a required role and the user role doesn't match, redirect
    if (requiredRole && userRole !== requiredRole) {
        return navigateTo('/auth'); // Redirect to an unauthorized page
    }
});
