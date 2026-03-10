import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect } from "react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 transition-colors hover:text-white"
        aria-label="Cerrar"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-white/60 transition-colors hover:text-white md:left-8"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={36} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative h-[70vh] w-[90vw] max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white/60 transition-colors hover:text-white md:right-8"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={36} />
      </button>

      <div className="absolute bottom-6 text-sm text-white/60">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
