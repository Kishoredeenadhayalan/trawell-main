import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <div
      onClick={() => router.push(link)}
      className="w-full h-96 aspect-square rounded-lg shadow-lg overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        priority
        unoptimized
        layout="fill"
        src={imgUrl}
        alt={title}
        className="object-cover"
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
            <h3 className="text-lg font-semibold text-deepblue">{title}</h3>
            <p className="text-base text-gray-600">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;
