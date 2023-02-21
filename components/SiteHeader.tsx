import Link from "next/link";
import { LogOut, Settings, User } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";
import { MainNav } from "@/components/MainNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOut, useSession, signIn } from "next-auth/react";
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
import { AnimatePresence, motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import UserDropdown from "./UserDropdown";

export function SiteHeader() {
  const { data: session, status } = useSession();
  const { image, name } = session?.user || {};

  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end gap-6 space-x-4">
          <AnimatePresence>
            {!session && status !== "loading" ? (
              <div className="flex">
                <nav className="mr-4 flex items-center space-x-1">
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
                <Dialog>
                  <DialogTrigger>
                    <Button variant="outline" {...FADE_IN_ANIMATION_SETTINGS}>
                      Register / Log in
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Login</DialogTitle>
                      <DialogDescription>
                        Join the Quizander community. Have fun solving quizzes
                        from the the Harry Potter's universe and save your
                        achievements!
                      </DialogDescription>
                      <Separator />
                      <Button onClick={() => signIn("google")}>
                        Sign in with Google
                      </Button>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
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
