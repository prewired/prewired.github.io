PAGESDIR := ../_pages
SRC := child-protection-policy.md 
MD := $(PAGESDIR)/$(SRC)

installdir := ../_build

OPTIONS := -N --pdf-engine=xelatex --template=sig.tex --number-sections


PDF := $(SRC:md=pdf)
#PDF := $(patsubst %.md, %.pdf, $(HANDBOOK))

PANDOC := /usr/local/bin/pandoc


all: $(PDF)


$(PDF): $(MD)
	$(PANDOC) $(OPTIONS) $^ -o $(PDF)



# pdf:
#     pandoc -N --template=sig.tex child-protection-policy.md --pdf-engine=xelatex -o child-protection-policy.pdf