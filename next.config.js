/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    scheduleLink: 'https://cloud-native-day-oslo-2025.sessionize.com/schedule/',
    cfpOpen: false,
    registrationLink: 'https://ti.to/cloud-native-norway/cnd-oslo-25',
    registrationOpen: true,
  },
}

module.exports = nextConfig
