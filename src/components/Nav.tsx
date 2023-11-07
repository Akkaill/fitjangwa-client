"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { CoureseLists } from "./CoureseList";

export const Navbar = () => {
  return (
    <div className="  mt-4 container">
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href="/">
            <Image
              src="/Logomuscle.jpg"
              alt="logo"
              width={60}
              height={60}
            ></Image>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Course & Price List</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] no-underline outline-none">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md  bg-slate-100  p-6 focus:shadow-slate-100"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          <Image
                            src="/cbum.png"
                            alt="logo"
                            width={300}
                            height={60}
                            className="z-0 "
                          ></Image>
                          Upperbody
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground z-10">
                          Sale End of The year just pay 1M Baht That's it. If
                          you really want to be like Cbum you must buy this
                          course
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/docs"
                    title="Full Body"
                    className="hover:bg-slate-800"
                  >
                    Cardio part will burn everysingle cells of Bodyfat in ur
                    body.
                  </ListItem>

                  <ListItem
                    href="/docs/installation"
                    title="Lower Body"
                    className="hover:bg-slate-800"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <p>
                            The hatest part of body that everygrmbro hate so
                            much is Leg ,If you would to be like Ronnie colem
                            man u have to prepare ur leg as much as u can it
                            will break ur leg and make u cant walk like natural
                            ever
                          </p>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 box-border w-64">
                          The hatest part of body that everygrmbro hate so much
                          is Leg ,If you would to be like Ronnie colem man u
                          have to prepare ur leg as much as u can it will break
                          ur leg and make u cant walk like natural ever
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Chest"
                    className="hover:bg-slate-800"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <p>
                            This is the best of the gym that we would to
                            reccomend you if you want to skip leg day and gain
                            ur chest , you have to try it
                          </p>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 box-border w-64">
                          This is the best of the gym that we would to reccomend
                          you if you want to skip leg day and gain ur chest ,
                          you have to try it
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Personal Training
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Online Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Group Training
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
