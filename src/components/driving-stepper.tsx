import {
  Step,
  type StepItem,
  Stepper,
  useStepper,
} from '@/components/ui/stepper'
import { Button } from '@/components/ui/button'
import { CarIcon, EyeIcon, FormInputIcon } from 'lucide-react'
import Confetti from '@/components/ui/confetti'

const steps = [
  {
    label: 'צעד ראשון',
    body: (
      <p>
        ראשית יש לבצע את מבחן התאוריה המעשית,
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.theorytest.org.il/"
        >
          <Button variant="link">קישור לקביעת מועד.</Button>
        </a>
      </p>
    ),
    icon: CarIcon,
  },
  {
    label: 'צעד שני',
    body: (
      <p>
        יש למלא את טופס בקשת רישיון הנהיגה,
        <a
          target="_blank"
          rel="noreferrer"
          href="https://govforms.gov.il/mw/forms/RishumTheory@mot.gov.il#!requestDetails"
        >
          <Button variant="link">קישור לטופס.</Button>
        </a>
      </p>
    ),
    icon: FormInputIcon,
  },
  {
    label: 'צעד שלישי',
    body: <p>לבסוף יש לבצע בדיקת ראייה לרכב פרטי מסוג B.</p>,
    icon: EyeIcon,
  },
] satisfies StepItem[]

export function DrivingStepper() {
  return (
    <div className="flex flex-col gap-4">
      <Stepper orientation="horizontal" initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={index} {...stepProps}>
              <div className="my-4 min-h-40 rounded-md border border-border p-4">
                {stepProps.body}
              </div>
            </Step>
          )
        })}
        <Footer />
      </Stepper>
    </div>
  )
}

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
  } = useStepper()
  return (
    <>
      {hasCompletedAllSteps && (
        <>
          <Confetti />
          <div className="flex h-40 animate-background-shine items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,#FFFFFF,45%,#f5f5f5,55%,#FFFFFF)] bg-[length:200%_100%] transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]">
            <h1 className="text-xl"> סיימת את כל הצעדים! 🎉</h1>
          </div>
        </>
      )}
      <div className="flex w-full justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="lg" onClick={resetSteps}>
            לאתחל
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              variant="secondary"
              size="lg"
            >
              קודם
            </Button>
            <Button size="lg" onClick={nextStep}>
              {isLastStep ? 'סיום' : 'הבא'}
            </Button>
          </>
        )}
      </div>
    </>
  )
}
