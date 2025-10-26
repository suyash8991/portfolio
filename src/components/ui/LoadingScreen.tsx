"use client"

import { motion } from "framer-motion"
import { useTheme } from "../../hooks/useTheme"

interface LoadingScreenProps {
  isLoading: boolean
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const { theme } = useTheme()

  if (!isLoading) return null

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
    },
  }

  const IceCrystal = () => (
    <motion.div
      className="text-6xl text-center"
      style={{ color: "var(--accent-primary)" }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      }}
    >
      ❄
    </motion.div>
  )

  const FireFlame = () => (
    <div className="relative">

      <motion.div
        className="w-16 h-auto mx-auto"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64px"
          height="96px"
          viewBox="0 0 125 189.864"
          className="w-full h-auto"
        >
          <path
            className="flame-main"
            fill="#F36E21"
            d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465
            c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54
            c6.806,41.899,16.831,45.301,6.088,53.985"
          />
          <path
            className="flame-main one"
            fill="#F6891F"
            d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123
            c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"
          />
          <path
            className="flame-main two"
            fill="#FFD04A"
            d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998
            C84.858,184.21,125.705,150.905,81.657,79.192z"
          />
          <path
            className="flame-main three"
            fill="#FDBA16"
            d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79
            C95.354,106.319,99.92,114.108,99.92,101.754z"
          />
          <path
            className="flame-main four"
            fill="#F36E21"
            d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041
            S134.387,164.603,103.143,105.917z"
          />
          <path
            className="flame-main five"
            fill="#FDBA16"
            d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"
          />
          <path
            className="flame"
            fill="#F36E21"
            d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"
          />
          <path
            className="flame one"
            fill="#F36E21"
            d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"
          />
          <path
            className="flame two"
            fill="#F36E21"
            d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"
          />
        </svg>
      </motion.div>
    </div>
  )

  const FloatingParticles = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(theme === "ice" ? 12 : 8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: theme === "ice" ? [-20, -40, -20] : [20, -20, 20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: theme === "ice" ? 4 : 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-2 h-2 rounded-full ${theme === "ice" ? "bg-blue-200" : "bg-orange-400"}`}
            style={{
              boxShadow: theme === "ice" ? "0 0 10px rgba(135, 206, 235, 0.6)" : "0 0 10px rgba(255, 69, 0, 0.6)",
            }}
          />
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <FloatingParticles />

      <div className="text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto flex items-center justify-center relative">
            {theme === "ice" ? <IceCrystal /> : <FireFlame />}
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div variants={textVariants} initial="initial" animate="animate" className="mb-8">
          <h1 className="text-2xl font-medieval mb-2" style={{ color: "var(--text-primary)" }}>
            Suyash Sreekumar
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            {theme === "ice" ? "Winter is Coming..." : "Fire and Blood..."}
          </p>
        </motion.div>

        <motion.div variants={textVariants} initial="initial" animate="animate" className="w-64 mx-auto">
          <div
            className="rounded-full p-1"
            style={{
              backgroundColor: "var(--border-color)",
              boxShadow: theme === "ice" ? "0 0 20px rgba(135, 206, 235, 0.3)" : "none",
            }}
          >
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
              <motion.div
                variants={progressVariants}
                initial="initial"
                animate="animate"
                className="h-full rounded-full relative"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  boxShadow: theme === "ice" ? "0 0 10px rgba(135, 206, 235, 0.6)" : "none",
                }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            {theme === "ice" ? "Forging in the cold..." : "Melting in the flames..."}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: "var(--accent-secondary)",
                boxShadow: theme === "ice" ? "0 0 8px rgba(135, 206, 235, 0.5)" : "0 0 8px rgba(255, 165, 0, 0.5)",
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
