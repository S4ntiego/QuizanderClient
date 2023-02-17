import { siteConfig } from "@/config/site"
import { Icons } from "@/components/Icons"

export function SiteFooter() {
  return (
    <footer className="container">
      <div className="flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 dark:border-t-slate-700 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-8 md:px-0">
          <Icons.logo className="h-6 w-6" />
          <p className="text-center text-xs leading-loose text-slate-600 dark:text-slate-400 md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Adam Ksiazek
            </a>
            . Images generated by{" "}
            <a
              href={siteConfig.links.midjourney}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Midjourney
            </a>
            . Design inspired by{" "}
            <a
              href={"https://github.com/shadcn"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Shadcn
            </a>
            . Quizander is not endorsed or supported directly or indirectly with
            Warner Bros. Entertainment, JK Rowling, Wizarding World Digital, or
            any of the official Harry Potter trademark/right holders.
          </p>
        </div>
      </div>
    </footer>
  )
}