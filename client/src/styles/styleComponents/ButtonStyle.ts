export const ButtonStyle = {
  variants: {
    // Primary

    buttonPrimary: {
      bg: '#818CF8',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontWeight: 400,
      letterSpacing: 1.5,
      minWidth: '100px',
      _hover: { opacity: 0.8 },
      _focus: { boxShadow: 'outline' },
    },

    // dave: added createRequest to "maybe" use on StudentDashboard page
    createRequest: {
      bg: '#1B51FF',
      border: '1.5px solid',
      borderColor: 'white',
      borderRadius: '20px',
      borderWeight: '1px',
      color: '#fff',
      fontFamily: 'nunito',
      fontWeight: 600,
      letterSpacing: 1.5,
      p: '20px',
      minWidth: '100px',
      _hover: { opacity: 0.6 },
      _focus: { boxShadow: 'outline' },
    },

    starRating: {
      position: "relative",
    }
  },
}
