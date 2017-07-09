USE [FNE]
GO

/****** Object:  Table [dbo].[Demandeur]    Script Date: 08/07/2017 20:49:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



CREATE TABLE [dbo].[Demandeurs](
	[id] varchar(15),
	[Numero] [nvarchar](15) NULL,
	[Nom] [nvarchar](50) NULL,
	[Prenom] [nvarchar](50) NULL,
	[DateNaissance] [date] NULL,
	[Gender] [nvarchar](1) NULL,
	[CommNaiss] [nvarchar](55) NULL,
	[WilNaiss] [nvarchar](202) NULL,
	[NumeroActeNaissance] [nvarchar](6) NULL,
	[ComResidance] [nvarchar](202) NULL,
	[WilResidance] [nvarchar](202) NULL,
	[AgenceDemandeur] [nvarchar](210) NULL,
	[DateDebutContrat] [date] NULL,
	[DateFinContrat] [date] NULL,
	[PayNaiss] [nvarchar](205) NULL
	

 CONSTRAINT [PK_Demandeurs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


