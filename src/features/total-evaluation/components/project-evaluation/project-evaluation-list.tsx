import ProjectEvaluation from '@/features/total-evaluation/components/project-evaluation/project-evaluation';
import { useGetPortfolioFeedbackData } from '@/features/total-evaluation/hooks/use-get-portfolio-feedback-data';

export default function ProjectEvaluationList() {
  const { projectEvaluation } = useGetPortfolioFeedbackData();

  return projectEvaluation.map((project) => (
    <ProjectEvaluation key={project.projectName} projectEvaluation={project} />
  ));
}
