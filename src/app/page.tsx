import { Plus } from "@/components/icons";
import PageLayout, {
  PageContent,
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/layout/pageLayout";
import Jobs from "@/components/pages/home/jobs";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <PageLayout>
      <PageHeader>
        <PageTitle>求人一覧</PageTitle>
        <PageDescription>作成した求人がすべて表示されます。</PageDescription>
      </PageHeader>
      <PageContent>
        <div className="w-full px-3xl py-l flex justify-end border-b border-border-component">
          <Button size="s" className="gap-ss">
            <Plus /> 求人を作成
          </Button>
        </div>
        <Jobs />
      </PageContent>
    </PageLayout>
  );
}
