import {
  Step,
  type StepItem,
  Stepper,
  useStepper,
} from '@/components/ui/stepper'
import { Button } from '@/components/ui/button'
import { EyeIcon, FormInputIcon, PhoneCallIcon } from 'lucide-react'
import { siteConfig } from '@/config/site'
import Confetti from '@/components/ui/confetti'

const steps = [
  {
    label: 'צעד ראשון',
    body: (
      <p>
        תחילה, יש להוציא בקשה לרישיון נהיגה, אנא תמלאו את הטופס הבא:
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
    label: 'צעד שני',
    body: <p>לאחר מכן יש לבצע בדיקת ראייה על ידי אופטומטריסט.</p>,
    icon: EyeIcon,
  },
  {
    label: 'צעד שלישי',
    body: (
      <p>
        לבסוף, תכתבו לנו
        <a target="_blank" rel="noreferrer" href={siteConfig.links.whatsapp}>
          <Button variant="link">בווטסאפ.</Button>
        </a>
      </p>
    ),
    icon: PhoneCallIcon,
  },
] satisfies StepItem[]

export function DrivingStepper() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper orientation="vertical" initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={index} {...stepProps}>
              <div className="my-4 h-40 rounded-md border border-border p-4">
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
          <div className="flex h-40 animate-background-shine items-center justify-center rounded-lg border border-zinc-700 bg-card bg-[length:200%_100%] text-card-foreground shadow-sm transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]">
            <h1 className="text-xl"> סיימת את כל הצעדים! 🎉</h1>
          </div>
        </>
      )}
      <div className="flex w-full justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            לאתחל
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              קודם
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? 'סיום' : 'הבא'}
            </Button>
          </>
        )}
      </div>
    </>
  )
}
