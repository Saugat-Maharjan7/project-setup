import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-[var(--colors-neutral-black)] p-[var(--dimensions-paddings-padding-3xl)]">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <div className="text-[var(--colors-tailwind-red-300)] font-bold text-[36px]">
          <h1>
            NEXT.JS
          </h1>
        </div>
        <div className="p-[var(--dimensions-paddings-padding-5xl))] bg-[var(--colors-primary-test-check)] inline-flex flex-col justify-center items-center gap-2.5">
         <div className="justify-start"><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">--background: var(--primary-white);  --foreground: #0A0A0A;  --card: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#FFFFFF</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --card-foreground: #0A0A0A;  --popover: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#FFFFFF</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --popover-foreground: #0A0A0A;  --primary: #181818;  --primary-foreground: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#FAFAFA</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --secondary: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#F2F2F2</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --secondary-foreground: #181818;  --muted: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#F2F2F2</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --muted-foreground: #757575;  --accent: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#F2F2F2</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --accent-foreground: #181818;  --destructive: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#CC3333</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --destructive-foreground: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#FAFAFA</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --border: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#E5E5E5</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --input: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#E5E5E5</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --ring: #808080;  --radius: 0.5rem;  --chart-1: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#E4572E</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --chart-2: #248888;  --chart-3: #1F5673;  --chart-4: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#E3A72F</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --chart-5: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#F29E4C</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --sidebar-background: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#FAFAFA</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --sidebar-foreground: #393939;  --sidebar-primary: #181818;  --sidebar-primary-foreground: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#FAFAFA</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --sidebar-accent: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#F2F2F2</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --sidebar-accent-foreground: #181818;  --sidebar-border: </span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">#D5D5D5</span><span class="text-white text-base font-medium font-['Montserrat'] leading-normal">;  --sidebar-ring: #808080;<br/>--button-primary: var(--prim i)</span></div>
        </div>

        
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[var(--colors-neutral-white)] text-[var(--colors-neutral-black)] gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            /> */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="var(--colors-neutral-black)" stroke-width="1.5"/>
            <path d="M16.5 16.5L13 13M13 13H16M13 13V16M11 8V11M11 11H8M11 11L7.5 7.5" stroke="var(--colors-neutral-black)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H15C15.2652 1 15.5196 1.10536 15.7071 1.29289L20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7956 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V7.41421L14.5858 3H6Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1C14.5523 1 15 1.44772 15 2V6C15 6.26522 15.1054 6.51957 15.2929 6.70711C15.4804 6.89464 15.7348 7 16 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H16C15.2044 9 14.4413 8.68393 13.8787 8.12132C13.3161 7.55871 13 6.79565 13 6V2C13 1.44772 13.4477 1 14 1Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H10C10.5523 12 11 12.4477 11 13C11 13.5523 10.5523 14 10 14H8C7.44772 14 7 13.5523 7 13Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 13C13 12.4477 13.4477 12 14 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 17C7 16.4477 7.44772 16 8 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H8C7.44772 18 7 17.5523 7 17Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 17C13 16.4477 13.4477 16 14 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H14C13.4477 18 13 17.5523 13 17Z" fill="var(--colors-neutral-white)"/>
          </svg>

          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H15C15.2652 1 15.5196 1.10536 15.7071 1.29289L20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7956 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V7.41421L14.5858 3H6Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1C14.5523 1 15 1.44772 15 2V6C15 6.26522 15.1054 6.51957 15.2929 6.70711C15.4804 6.89464 15.7348 7 16 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H16C15.2044 9 14.4413 8.68393 13.8787 8.12132C13.3161 7.55871 13 6.79565 13 6V2C13 1.44772 13.4477 1 14 1Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H10C10.5523 12 11 12.4477 11 13C11 13.5523 10.5523 14 10 14H8C7.44772 14 7 13.5523 7 13Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 13C13 12.4477 13.4477 12 14 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 17C7 16.4477 7.44772 16 8 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H8C7.44772 18 7 17.5523 7 17Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 17C13 16.4477 13.4477 16 14 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H14C13.4477 18 13 17.5523 13 17Z" fill="var(--colors-neutral-white)"/>
          </svg>
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H15C15.2652 1 15.5196 1.10536 15.7071 1.29289L20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7956 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V7.41421L14.5858 3H6Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1C14.5523 1 15 1.44772 15 2V6C15 6.26522 15.1054 6.51957 15.2929 6.70711C15.4804 6.89464 15.7348 7 16 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H16C15.2044 9 14.4413 8.68393 13.8787 8.12132C13.3161 7.55871 13 6.79565 13 6V2C13 1.44772 13.4477 1 14 1Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H10C10.5523 12 11 12.4477 11 13C11 13.5523 10.5523 14 10 14H8C7.44772 14 7 13.5523 7 13Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 13C13 12.4477 13.4477 12 14 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 17C7 16.4477 7.44772 16 8 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H8C7.44772 18 7 17.5523 7 17Z" fill="var(--colors-neutral-white)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 17C13 16.4477 13.4477 16 14 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H14C13.4477 18 13 17.5523 13 17Z" fill="var(--colors-neutral-white)"/>
          </svg>
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
