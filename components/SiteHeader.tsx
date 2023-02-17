import Link from "next/link";
import { LogOut, Settings, User } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";
import { MainNav } from "@/components/MainNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import UserDropdown from "./layout/user-dropdown";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { useSignInModal } from "./layout/sign-in-modal";

export function SiteHeader() {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <SignInModal />
        <div className="flex flex-1 items-center justify-end gap-6 space-x-4">
          <AnimatePresence>
            {!session && status !== "loading" ? (
              <div className="flex">
                <nav className="flex items-center space-x-1">
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                        className: "text-slate-700 dark:text-slate-400",
                      })}
                    >
                      <Icons.gitHub className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                        className: "text-slate-700 dark:text-slate-400",
                      })}
                    >
                      <Icons.twitter className="h-5 w-5 fill-current" />
                      <span className="sr-only">Twitter</span>
                    </div>
                  </Link>
                  <ThemeToggle />
                </nav>

                <motion.button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Sign In
                </motion.button>
              </div>
            ) : (
              <UserDropdown />
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
