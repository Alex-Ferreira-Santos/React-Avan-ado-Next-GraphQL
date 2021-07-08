export type LogoProps = {
    alternativeText: string
    url: string
}

export type HeaderProps = {
    title: string
    description: string
    button:{
      label: string
      url: string
    }
    image:{
      alternativeText: string
      url: string
    }
}

export type SectionAboutProjectProps = {
    title: string
    description: string
    image:{
      alternativeText: string
      url: string
    }
}

export type SectionTechProps = {
    title:string
    techIcons:{
        title: string
        icon:{
            alternativeText: string
            url: string
        }
    }[]
}

export type SectionConceptsProps = {
    title: string
    concepts:{
        title: string
    }[]
}

export type SectionModulesProps = {
    title: string
    modules:{
        title: string
        subtitle: string
        description: string
    }[]
}

export type SectionAgendaProps = {
    title: string
    description: string
}

export type PricingBoxProps = {
    totalPrice: string
    numberInstallments: string
    priceInstallment: string
    benefits: string
    button:{
        label: string
        url: string
    }
}

export type SectionReviewsProps = {
    title: string
    reviews:{
      name: string
      text: string
      photo:{
        alternativeText: string
        url: string
      }
    }[]
}

export type SectionFaqProps = {
    title: string
    questions:{
      question: string
      answer: string
    }[]
}

export type LandingPageProps = {
    logo: LogoProps
    header: HeaderProps
    sectionAboutProject: SectionAboutProjectProps
    sectionTech: SectionTechProps
    sectionConcepts: SectionConceptsProps
    sectionModules: SectionModulesProps
    sectionAgenda: SectionAgendaProps
    pricingBox: PricingBoxProps
    sectionReviews: SectionReviewsProps
    sectionFaq: SectionFaqProps
}