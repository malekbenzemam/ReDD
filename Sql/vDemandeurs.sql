ALter view vDemandeurs
AS 
SELECT         CONCAT('d-', id) AS id, '(aucun)' AS Numero, [Nom], [Prenom], [DateNaissance], [Gender], [CommNaiss], '' AS WilNaiss, '' AS NumeroActeNaissance, '' AS ComResidance, w.Intitule AS WilResidance, 
                         '' AS AgenceDemandeur, [DateDebutContrat], [DateFinContrat]
FROM            [dbo].[DemandeursDAIP2] D INNER JOIN
                         Wilaya W ON (W.CodeWilaya= D.CodeWilaya)

UNION ALL
SELECT        CONCAT('c-', id) AS id, Numero, [Nom], [Prenom], [DateNaissance], [Gender], [CommNaiss], WilNaiss, NumeroActeNaissance, ComResidance, WilResidance, AgenceDemandeur, NULL 
                         AS [DateDebutContrat], NULL AS [DateFinContrat]
FROM            [dbo].demandeur