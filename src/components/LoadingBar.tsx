"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface LoadingBarProps {
  color?: string;
  height?: number;
  showSpinner?: boolean;
}

export default function LoadingBar({
  color = "#007bff",
  height = 3,
  showSpinner = false,
}: LoadingBarProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const startLoading = () => {
      setIsLoading(true);
      setProgress(0);

      // Simulate realistic progress
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 85) return prev;
          const increment = Math.random() * 10 + 5; // 5-15% increments
          return Math.min(prev + increment, 85);
        });
      }, 150);
    };

    const finishLoading = () => {
      setProgress(100);
      clearInterval(progressInterval);

      // Hide loading bar after animation completes
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 400);
    };

    // Override router methods to detect navigation
    const originalPush = router.push;
    const originalReplace = router.replace;
    const originalBack = router.back;
    const originalForward = router.forward;

    const handleNavigation = () => {
      startLoading();

      // Auto-finish after reasonable time
      setTimeout(() => {
        finishLoading();
      }, 1000);
    };

    router.push = (...args) => {
      handleNavigation();
      return originalPush.apply(router, args);
    };

    router.replace = (...args) => {
      handleNavigation();
      return originalReplace.apply(router, args);
    };

    router.back = () => {
      handleNavigation();
      return originalBack.apply(router);
    };

    router.forward = () => {
      handleNavigation();
      return originalForward.apply(router);
    };

    // Listen for link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (
        link &&
        link.href &&
        !link.href.startsWith("mailto:") &&
        !link.href.startsWith("tel:")
      ) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          startLoading();
          setTimeout(() => {
            finishLoading();
          }, 1000);
        }
      }
    };

    // Listen for popstate events (browser back/forward)
    const handlePopState = () => {
      startLoading();
      setTimeout(() => {
        finishLoading();
      }, 1000);
    };

    document.addEventListener("click", handleLinkClick);
    window.addEventListener("popstate", handlePopState);

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleLinkClick);
      window.removeEventListener("popstate", handlePopState);

      // Restore original methods
      router.push = originalPush;
      router.replace = originalReplace;
      router.back = originalBack;
      router.forward = originalForward;
    };
  }, [router]);

  // Detect route changes via pathname changes
  useEffect(() => {
    if (isLoading) {
      // Route change detected, finish loading
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
        }, 300);
      }, 200);
    }
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <>
      <div
        className="loading-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: `${height}px`,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 9999,
          overflow: "hidden",
        }}
      >
        <div
          className="loading-bar-progress"
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: color,
            background: `linear-gradient(90deg, ${color}, ${color}dd, ${color})`,
            transition: "width 0.3s ease-out",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="loading-bar-shimmer"
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)`,
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
      </div>

      {showSpinner && (
        <div
          className="loading-spinner"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10000,
            width: "40px",
            height: "40px",
            border: `3px solid rgba(0, 123, 255, 0.3)`,
            borderTop: `3px solid ${color}`,
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes spin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .loading-bar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .loading-bar-progress {
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
        }
      `}</style>
    </>
  );
}
