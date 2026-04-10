export default {
  theme: {
    extend: {
      keyframes: {
        dropIn: {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        dropIn: 'dropIn 0.8s ease-out forwards'
      }
    }
  }
}