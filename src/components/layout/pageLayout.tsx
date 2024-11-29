import { cn } from "@/lib/utils";
import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "space-y-xl w-full h-full bg-background-page text-text-black",
        className
      )}>
      {children}
    </div>
  );
};

export default PageLayout;

type PageHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  children,
}) => {
  return <div className={cn("space-y-lg", className)}>{children}</div>;
};

type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({
  className,
  children,
}) => {
  return <div className={cn("font-bold text-lg", className)}>{children}</div>;
};

type PageDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageDescription: React.FC<PageDescriptionProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("text-md font-regular", className)}>{children}</div>
  );
};

type PageContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageContent: React.FC<PageContentProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "bg-background-component border border-border-component rounded-sm h-fit-content",
        className
      )}>
      {children}
    </div>
  );
};
