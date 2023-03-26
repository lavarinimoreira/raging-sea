uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vElevation;

void main()
{   
    // The elevation value goes by - 0.2 to 0.2,
    // So we need to get higher values
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;

    // Mixing the colors according to the elevation
    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);

    gl_FragColor = vec4(color, 1.0);
}