import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imgUrl,
  link
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div style={{ perspective: "1500px" }}>
      <motion.div
        onClick={() => router.push(link)}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-96 aspect-square rounded-lg shadow-lg overflow-hidden relative cursor-pointer border border-white/10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          fill
          src={imgUrl}
          alt={title}
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-transparent z-10">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-5 z-20"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
              <p className="text-base text-gray-600">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
